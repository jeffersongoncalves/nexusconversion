'use client';

import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import * as React from "react";
import {createConversion} from "./actions";
import {FavoriteCurrencySelect} from "@/components/favorite-currency-select";

interface ConversionFormProps extends React.ComponentProps<"div"> {
  user: {
    id: number
    name: string
    email: string
    avatar: string
  }
}

export function ConversionForm({className, user, ...props}: ConversionFormProps) {
  const [selectedCurrency, setSelectedCurrency] = React.useState<string | undefined>("");

  return (
    <div className="flex flex-col items-center w-full">
      <div className={cn("flex flex-col gap-6 w-full max-w-lg", className)} {...props}>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Conversão de Moedas</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={createConversion}>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="currency">Moeda</Label>
                  <FavoriteCurrencySelect
                    value={selectedCurrency}
                    onChange={setSelectedCurrency}
                  />
                  <input type="hidden" name="currency" value={selectedCurrency}/>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="value">Valor</Label>
                  <Input id="value" name="value" type="text" placeholder="1.50" required/>
                </div>
                <Button type="submit" className="w-full">
                  Converter
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
