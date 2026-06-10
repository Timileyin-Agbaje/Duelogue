import { MessageCircle, History} from 'lucide-react'

export default function sidebarItems() {
    return(
        <div>
            <section className="flex flex-col gap-1 mt-10">
                <button className=" hover:bg-gray-100  w-10/12 p-2 rounded-lg flex flex-row gap-1 items-center text-sm text-gray-800"><MessageCircle className='h-7 w-6'/><p>New chat</p></button>
                <button className=" hover:bg-gray-100  w-10/12 p-2 rounded-lg flex flex-row gap-1 items-center text-sm  text-gray-800"><History className='h-7 w-6'/><p>History</p></button>
            </section>
        </div>
    )
}