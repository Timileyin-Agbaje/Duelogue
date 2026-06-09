import { LucideIcon, ChevronRight } from 'lucide-react';

type exampleCardProps = {
title: string;
description: string;
Icon: React.ReactNode;
}

export default function exampleCard({Icon, title, description}: exampleCardProps) {
    return(
        <div className="h-full">
            <section className="h-full w-full flex flex-row items-center gap-4 rounded-lg shadow-md border p-4 bg-white">
                <div className='w-12 h-12 bg-gray-100 rounded-lg p-2 inline-flex items-center justify-center'>{Icon}</div>
                <div className="flex flex-col flex-1">
                    <h4 className='text-base text-gray-800'>{title}</h4>
                    <p className='text-xs text-gray-600'>{description}</p>
                </div>
                <button><ChevronRight /></button>
            </section>
        </div>
    )
}