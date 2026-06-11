import { Shield } from 'lucide-react';

export default function footerNote() {
    return(
        <div>
            <footer className="flex flex-row text-sm text-gray-500 gap-1 items-center justify-center mt-6">
                <Shield /><p>Duelogue presents both perspectives.Final decisions are yours.</p>
            </footer>
        </div>
    )
}