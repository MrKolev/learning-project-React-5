// import { OPTION_SHEET } from "../dummy-meals";
// import { Input } from '../../UI/Input'
// import { useRef } from "react";

// export const OptionSheets = ({ id }) => {
//     return (
//         <div>
//             <ul>
//                 {OPTION_SHEET.map((option, index) => {
//                     const ref = useRef();
//                     return <li key={index}>
//                         <Input
//                             ref={ref}
//                             label={option}
//                             input={{
//                                 id: `amount_${id}`,
//                                 type: 'checkbox',
//                             }} />
//                     </li>
//                 })}
//             </ul>
//         </div>
//     )
// }