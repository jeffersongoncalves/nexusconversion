import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Command, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import * as React from "react";
import {getFavoritesCrypts, syncFavoritesCrypts} from "@/components/actions";

const currencies = [
  "btc", "eth", "ltc", "bch", "bnb", "eos", "xrp", "xlm", "link", "dot", "yfi",
  "usd", "aed", "ars", "aud", "bdt", "bhd", "bmd", "brl", "cad", "chf", "clp",
  "cny", "czk", "dkk", "eur", "gbp", "gel", "hkd", "huf", "idr", "ils", "inr",
  "jpy", "krw", "kwd", "lkr", "mmk", "mxn", "myr", "ngn", "nok", "nzd", "php",
  "pkr", "pln", "rub", "sar", "sek", "sgd", "thb", "try", "twd", "uah", "vef",
  "vnd", "zar", "xdr", "xag", "xau", "bits", "sats"
];

export function FavoriteCurrencySelect({
                                         value,
                                         onChange
                                       }: {
  value: string | undefined;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [favorites, setFavorites] = React.useState<string[]>([]);

  React.useEffect(() => {
    syncFavoritesCrypts(favorites).then();
  }, [favorites]);

  React.useEffect(() => {
    getFavoritesCrypts().then(setFavorites);
  }, [open]);

  const toggleFavorite = (currency: string) => {
    setFavorites((prev) =>
      prev.includes(currency)
        ? prev.filter((item) => item !== currency)
        : [...prev, currency]
    );
  };

  const sorted = [
    ...favorites,
    ...currencies.filter((c) => !favorites.includes(c))
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          {value ? value.toUpperCase() : "Escolha a moeda"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Buscar moeda..." />
          <CommandGroup>
            {sorted.map((currency) => (
              <CommandItem
                key={currency}
                value={currency}
                onSelect={() => {
                  onChange(currency);
                  setOpen(false);
                }}
              >
                <div className="flex justify-between items-center w-full">
                  <span>{currency.toUpperCase()}</span>
                  <div className="flex gap-2 items-center">
                    {value === currency && <Check className="w-4 h-4" />}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(currency);
                      }}
                    >
                      <Star
                        className={cn("w-4 h-4", {
                          "fill-yellow-400 text-yellow-500": favorites.includes(currency),
                          "text-gray-400": !favorites.includes(currency),
                        })}
                      />
                    </button>
                  </div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
