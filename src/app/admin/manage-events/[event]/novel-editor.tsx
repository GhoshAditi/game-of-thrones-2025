"use client"

import { EditorContent, EditorRoot } from "novel"
import { useDebouncedCallback } from "use-debounce"

interface NovelEditorProps {
    content: string
    onChange: (content: string) => void
    placeholder: string
}

export function NovelEditor({ content, onChange, placeholder }: NovelEditorProps) {
    const debouncedUpdates = useDebouncedCallback(async ({ editor }) => {
        const json = editor.getJSON()
        onChange(JSON.stringify(json))
    }, 500)

    return (
        <EditorRoot>
            <EditorContent
                initialContent={content ? JSON.parse(content) : null}
                onUpdate={debouncedUpdates}
                className="relative min-h-[200px] w-full border border-gray-700 bg-[#1e2432] px-4 py-3 rounded-lg prose prose-invert prose-headings:font-title font-default focus:outline-none max-w-full text-base"
            >
                <div className="absolute text-gray-400 pointer-events-none">{placeholder}</div>
            </EditorContent>
        </EditorRoot>
    )
}

