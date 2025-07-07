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
                  <Select name="currency">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Moeda"/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="btc">BTC</SelectItem>
                      <SelectItem value="eth">ETH</SelectItem>
                      <SelectItem value="ltc">LTC</SelectItem>
                      <SelectItem value="bch">BCH</SelectItem>
                      <SelectItem value="bnb">BNB</SelectItem>
                      <SelectItem value="eos">EOS</SelectItem>
                      <SelectItem value="xrp">XRP</SelectItem>
                      <SelectItem value="xlm">XLM</SelectItem>
                      <SelectItem value="link">LINK</SelectItem>
                      <SelectItem value="dot">DOT</SelectItem>
                      <SelectItem value="yfi">YFI</SelectItem>
                      <SelectItem value="sol">SOL</SelectItem>
                      <SelectItem value="aed">AED</SelectItem>
                      <SelectItem value="ars">ARS</SelectItem>
                      <SelectItem value="aud">AUD</SelectItem>
                      <SelectItem value="bdt">BDT</SelectItem>
                      <SelectItem value="bhd">BHD</SelectItem>
                      <SelectItem value="bmd">BMD</SelectItem>
                      <SelectItem value="brl">BRL</SelectItem>
                      <SelectItem value="cad">CAD</SelectItem>
                      <SelectItem value="chf">CHF</SelectItem>
                      <SelectItem value="clp">CLP</SelectItem>
                      <SelectItem value="cny">CNY</SelectItem>
                      <SelectItem value="czk">CZK</SelectItem>
                      <SelectItem value="dkk">DKK</SelectItem>
                      <SelectItem value="gbp">GBP</SelectItem>
                      <SelectItem value="gel">GEL</SelectItem>
                      <SelectItem value="hkd">HKD</SelectItem>
                      <SelectItem value="huf">HUF</SelectItem>
                      <SelectItem value="idr">IDR</SelectItem>
                      <SelectItem value="ils">ILS</SelectItem>
                      <SelectItem value="inr">INR</SelectItem>
                      <SelectItem value="jpy">JPY</SelectItem>
                      <SelectItem value="krw">KRW</SelectItem>
                      <SelectItem value="kwd">KWD</SelectItem>
                      <SelectItem value="lkr">LKR</SelectItem>
                      <SelectItem value="mmk">MMK</SelectItem>
                      <SelectItem value="mxn">MXN</SelectItem>
                      <SelectItem value="myr">MYR</SelectItem>
                      <SelectItem value="ngn">NGN</SelectItem>
                      <SelectItem value="nok">NOK</SelectItem>
                      <SelectItem value="nzd">NZD</SelectItem>
                      <SelectItem value="php">PHP</SelectItem>
                      <SelectItem value="pkr">PKR</SelectItem>
                      <SelectItem value="pln">PLN</SelectItem>
                      <SelectItem value="rub">RUB</SelectItem>
                      <SelectItem value="sar">SAR</SelectItem>
                      <SelectItem value="sek">SEK</SelectItem>
                      <SelectItem value="sgd">SGD</SelectItem>
                      <SelectItem value="thb">THB</SelectItem>
                      <SelectItem value="try">TRY</SelectItem>
                      <SelectItem value="twd">TWD</SelectItem>
                      <SelectItem value="uah">UAH</SelectItem>
                      <SelectItem value="vef">VEF</SelectItem>
                      <SelectItem value="vnd">VND</SelectItem>
                      <SelectItem value="zar">ZAR</SelectItem>
                      <SelectItem value="xdr">XDR</SelectItem>
                      <SelectItem value="xag">XAG</SelectItem>
                      <SelectItem value="xau">XAU</SelectItem>
                      <SelectItem value="bits">BITS</SelectItem>
                      <SelectItem value="sats">SATS</SelectItem>
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
