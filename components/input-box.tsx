import React from 'react'
import { PromptInput, PromptInputActionAddAttachments, PromptInputActionMenu, PromptInputActionMenuContent, PromptInputActionMenuTrigger, PromptInputAttachment, PromptInputAttachments, PromptInputBody, PromptInputSubmit, PromptInputTextarea, PromptInputToolbar, PromptInputTools } from './ai-elements/prompt-input';

const handleSubmit = () => {
    console.log("hello")
}

const InputBox = () => {
    return (
        <PromptInput onSubmit={handleSubmit} className="mt-4 max-w-[60vw] rounded-md mx-auto fixed bottom-8 z-10" globalDrop multiple>
            <PromptInputBody>
                <PromptInputAttachments>
                    {(attachment) => <PromptInputAttachment data={attachment} />}
                </PromptInputAttachments>
                <div className='flex items-center'>
                    <PromptInputTextarea placeholder='Ask me anything...' />
                    <PromptInputToolbar>
                        <PromptInputTools>
                            <PromptInputActionMenu>
                                <PromptInputActionMenuTrigger />
                                <PromptInputActionMenuContent>
                                    <PromptInputActionAddAttachments className='cursor-pointer' />
                                </PromptInputActionMenuContent>
                            </PromptInputActionMenu>
                        </PromptInputTools>
                    </PromptInputToolbar>
                    <PromptInputSubmit disabled={false} className='rounded-full mr-2 cursor-pointer bg-[#a886f8]'/>
                </div>

            </PromptInputBody>

        </PromptInput>
    )
}

export default InputBox