import "react";
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/app-sidebar";
import {Separator} from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import prisma from "@/lib/prisma";
import {notFound} from "next/navigation";
import {ConversionView} from "@/components/conversion-view";

export default async function Conversion({params}: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  const {id} = await params;
  const conversionId = parseInt(id);
  const conversion = await prisma.convertion.findUnique({where: {id: conversionId}});

  if (!conversion) {
    notFound();
  }
  return (
    <SidebarProvider>
      <AppSidebar user={session.user}/>
      <SidebarInset>
        <header
          className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1"/>
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/">
                    Conversão de Moedas
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block"/>
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    {conversion.currency.toUpperCase()}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <ConversionView convertion={{
            id: conversion.id,
            currency: conversion.currency,
            value: conversion.value.toNumber(),
            value_usd: conversion.value_usd.toNumber(),
            value_brl: conversion.value_brl.toNumber()
          }}/>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
