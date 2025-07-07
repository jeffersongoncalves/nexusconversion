'use server';
import * as React from "react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import prisma from "@/lib/prisma";

interface ConversionListProps extends React.ComponentProps<"div"> {
  user: {
    id: number
    name: string
    email: string
    avatar: string
  }
}

export async function ConversionList({className, user, ...props}: ConversionListProps) {
  const convertions = await prisma.convertion.findMany({where: {user_id: user.id}});

  function formatCurrency(value: number, currency: string) {
    return value.toLocaleString('pt-BR', {style: 'currency', currency: currency});
  }

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Minhas conversões</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Moeda</TableHead>
              <TableHead className="text-right">Valor</TableHead>
              <TableHead className="text-right">Valor em USD</TableHead>
              <TableHead className="text-right">Valor em BRL</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {convertions.map((convertion) => (
              <TableRow key={convertion.id}>
                <TableCell className="font-medium">
                  {convertion.currency.toUpperCase()}
                </TableCell>
                <TableCell className="text-right">
                  {formatCurrency(convertion.value.toNumber(), convertion.currency)}
                </TableCell>
                <TableCell className="text-right">
                  {formatCurrency(convertion.value_usd.toNumber(), 'usd')}
                </TableCell>
                <TableCell className="text-right">
                  {formatCurrency(convertion.value_brl.toNumber(), 'brl')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
