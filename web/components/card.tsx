
interface data{
    name: string,
    quote: {
        USD: {
            price: number,
            percentage_change_24h: number
        }
    }
}


export default function Card({data}: {data: data}) {
    return (
            <div className="py-3 sm:py-4">
                <div className="flex items-center">                   <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {data.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {data.quote.USD.price}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {data.quote.USD.percentage_change_24h}
                    </div>
                </div>
            </div>

    )
}