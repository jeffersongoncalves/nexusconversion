'use client';
import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import * as React from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {createConversion} from "./actions";
import Form from "next/form";

interface ConversionFormProps extends React.ComponentProps<"div"> {
  user: {
    id: number
    name: string
    email: string
    avatar: string
  }
}

export function ConversionForm({className, user, ...props}: ConversionFormProps) {
  const currencies = [
    "btc",
    "eth",
    "ltc",
    "bch",
    "bnb",
    "eos",
    "xrp",
    "xlm",
    "link",
    "dot",
    "yfi",
    "usd",
    "aed",
    "ars",
    "aud",
    "bdt",
    "bhd",
    "bmd",
    "brl",
    "cad",
    "chf",
    "clp",
    "cny",
    "czk",
    "dkk",
    "eur",
    "gbp",
    "gel",
    "hkd",
    "huf",
    "idr",
    "ils",
    "inr",
    "jpy",
    "krw",
    "kwd",
    "lkr",
    "mmk",
    "mxn",
    "myr",
    "ngn",
    "nok",
    "nzd",
    "php",
    "pkr",
    "pln",
    "rub",
    "sar",
    "sek",
    "sgd",
    "thb",
    "try",
    "twd",
    "uah",
    "vef",
    "vnd",
    "zar",
    "xdr",
    "xag",
    "xau",
    "bits",
    "sats"
  ];
  return (
    <div className="flex flex-col items-center w-full">
      <div className={cn("flex flex-col gap-6 w-full max-w-lg", className)} {...props}>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Conversão de Moedas</CardTitle>
          </CardHeader>
          <CardContent>
            <Form action={createConversion}>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="currency">Moeda</Label>
                  <Select name="currency" required>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Moeda"/>
                    </SelectTrigger>
                    <SelectContent>
                      {currencies.map((currency) => (
                        <SelectItem value={currency} key={currency}>
                          {currency.toUpperCase()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="value">Valor</Label>
                  <Input id="value" name="value" type="text" placeholder="1.50" required/>
                </div>
                <Button type="submit" className="w-full">
                  Converter
                </Button>
              </div>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
