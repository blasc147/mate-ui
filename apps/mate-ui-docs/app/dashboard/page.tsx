import { Currency } from '@/types/dashboard';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  FormControl,
  Input,
  cn,
} from '@truenorth/mate-ui';

async function getData() {
  const res = await fetch('https://api.coincap.io/v2/assets');

  if (!res) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

type GetDataResponse = {
  data: Currency[];
};

export default async function Page() {
  const { data } = (await getData()) as GetDataResponse;

  return (
    <div>
      <Card cardStyle="outline" padding="md" className="max-w-[572px]">
        <CardHeader className="flex justify-between">
          <CardTitle size="sm">Cryptos</CardTitle>
          <FormControl inputSize="lg">
            <Input type="text" />
          </FormControl>
        </CardHeader>
        <CardContent className="flex flex-col">
          {data.map((coin) => (
            <div
              className="mb-6 flex items-center justify-between gap-3 rounded"
              key={coin.id}
            >
              <picture>
                <img
                  src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                  alt={`img-${coin.id}`}
                  className="h-6 w-6"
                />
              </picture>
              <div className="flex w-full items-center justify-between gap-3">
                <div className="ml-2 flex w-full flex-col items-start justify-between text-sm">
                  <p className="text-neutral-900"> {coin.symbol}</p>
                  <p className="text-neutral-400">{coin.name}</p>
                </div>
                <span className="w-64 font-bold text-green-400">
                  ${Number(coin.priceUsd).toFixed(2)}
                </span>
                <span
                  className={cn({
                    'text-success-500': Number(coin.changePercent24Hr) > 0,
                    'text-error-500': Number(coin.changePercent24Hr) < 0,
                  })}
                >
                  {Number(coin.changePercent24Hr).toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
