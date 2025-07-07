'use client';
import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import * as React from "react";
import {useState} from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import prisma from "@/lib/prisma";
import { createConversion } from "./actions";
import Form from "next/form";
import {Convertion} from "@/app/generated/prisma";

interface ConversionFormProps extends React.ComponentProps<"div"> {
  convertion: {
    id: number
    currency: string
    value: number
    value_usd: number
    value_brl: number
  }
}

export function ConversionView({className, convertion, ...props}: ConversionFormProps) {
  function formatCurrency(value: number, currency: string) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: currency });
  }
  return (
    <div className="flex flex-col items-center w-full">
      <div className={cn("flex flex-col gap-6 w-full max-w-lg", className)} {...props}>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Conversão de Moedas - {convertion.currency.toUpperCase()}</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="currency">Moeda</Label>
                  <p>{ convertion.currency.toUpperCase() }</p>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="value">Valor</Label>
                  <p>{ formatCurrency(convertion.value, convertion.currency) }</p>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="value">Valor em USD</Label>
                  <p>{ formatCurrency(convertion.value_usd, 'usd') }</p>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="value">Valor em BRL</Label>
                  <p>{ formatCurrency(convertion.value_brl, 'brl') }</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
