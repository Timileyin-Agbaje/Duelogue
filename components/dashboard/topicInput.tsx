import { Plus, ArrowUp } from 'lucide-react';

export default function topicInput() {
    return(
        <div className="relative w-full max-w-2xl">
            <form>
                <section className='h-15 rounded-xl flex flex-row justify-between border p-2 shadow-lg'>
                <input type="text" className=" w-11/12 appearance-none outline-none border-0 ring-0 focus:outline-none focus:ring-0"  placeholder="Enter a topic to see both sides..."></input>
                <span className='w-10 h-10 bg-blue-600 rounded-full p-1 inline-flex items-center justify-center'><button type='submit'><ArrowUp color='#F9FAFB' /></button></span>
            </section>
            </form>
        </div>
    )
}