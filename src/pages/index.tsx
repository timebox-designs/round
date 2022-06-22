import {trpc} from "@/utils/trpc";

export default function Home() {
    const {data, isLoading} = trpc.useQuery(["hello", {text: "Don"}]);

    if (isLoading) return <div>Loading...</div>
    if (data) return <div>{data.greeting}</div>

    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <div className="text-2xl text-center mb-4">Which Pokémon is Rounder?</div>
            <div className="border rounded p-8 flex justify-between items-center max-w-2xl">
                <div className="w-16  h-16 bg-red-200"></div>
                <div className="p-8">vs</div>
                <div className="w-16  h-16 bg-red-200"></div>
                <div></div>
            </div>
        </div>
    )
}
