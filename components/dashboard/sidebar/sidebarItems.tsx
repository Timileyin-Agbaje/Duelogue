import { MessageCircle, History} from 'lucide-react'

export default function sidebarItems() {
    return(
        <div>
            <section className="flex flex-col gap-7 mt-10">
                <button className="flex flex-row gap-2"><MessageCircle/>New chat</button>
                <button className="flex flex-row gap-2"><History/>History</button>
            </section>
        </div>
    )
}