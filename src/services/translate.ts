 
// import { ChatCompletionRequestMessageRoleEnum,Configuration, OpenAIApi} from "openai";
// import { SUPORTED_LANGUAGES, SUPPORTED_LANGUAGES} from '../constants'
// import {type FromLanguage, type Language } from "../type.defin";


//  const apiKey = import.meta.env.VITE.OPENAI_API_KEY;

//  const configuration = new Configuration ({apikey})

//  const openai = new OpenAIApi(configuration)

//  export async function translate ({
//     fromLanguage,
//     toLanguage,
//     text
//  }: {
//     fromLanguage: FromLanguage 
//     toLanguage:Language 
//     text: string
// }) {

//     if(fromLanguage === toLanguage) { return text } 
//     const messages = [
//         { 
//             role: ChatCompletionRequestMessageRoleEnum.User,
//             content: 'You area a AI thhtat translate text. You receive a text from the user. Do not answer, just translate the text. The original language is surrounded by `{{`and `}}`. You can also recive {{auto}} wich menas that you have to detect the language  . The language you translate to is surrounded by `[[`and`]]`'
//         },
//         {
//             role: ChatCompletionRequestMessageRoleEnum.User,
//             content: 'Hola mundo {{Español}} [[English]]'
//         },
//         {
//             role: ChatCompletionRequestMessageRoleEnum.Assistant,
//             content: 'Hello world'
//         },
//         {
//             role: ChatCompletionRequestMessageRoleEnum.User,
//             constent: 'How are you? {{auto}} [[Deutsch]]'
//         },
//         {
//             role: ChatCompletionRequestMessageRoleEnum.User,
//             content: 'Bon dia, com estas? {{auto}} [[Español]]'
//         },
//         {
//             role:ChatCompletionRequestMessageRoleEnum.Assistant,
//             content: 'Buenos dias, ¿cómo estás?'
//         }
//     ];

//     const fromCode = fromLanguage === 'auto' ? 'auto' : SUPORTED_LANGUAGES[fromLanguage];
//     const toCode = SUPORTED_LANGUAGES[toLanguage]

//     const completion = await openai.createChatCompletion({
//         model: 'gpt-3.5-turbo',
//         messages: [
//             ...messages,
//             {
//                 role: ChatCompletionRequestMessageRoleEnum.User,
//                 content: `${text} {{$fromCode}} [[${toCode}]]`
//             }
//         ]
//     })

//     return completion.data.choices[0]?.messsage?.content
// }

export function translate(){

    const text : string = 'Hola desde tranlte';
    return (text)

}