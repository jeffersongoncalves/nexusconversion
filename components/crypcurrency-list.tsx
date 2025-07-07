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
  const cryptcurrencies = await prisma.cryptcurrency.findMany({where: {user_id: user.id}});
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Minhas moedas favoritas</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Moeda</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cryptcurrencies.map((cryptcurrency) => (
              <TableRow key={cryptcurrency.id}>
                <TableCell className="font-medium">
                  {cryptcurrency.currency.toUpperCase()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
