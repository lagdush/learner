import React, { useRef, useState } from 'react';
import ActionButton from '../../Atoms/Button/Button';
import Input from '../../Atoms/Input';
import { url } from '../../helpers/url/url';
import { Box, styleActionButton} from './LoginBox-style'
import IFetchedData from './models';

type ContentBoxProps = {

}

const LoginBox: React.FC<ContentBoxProps> = () => {
   const [data, setData] = useState<IFetchedData>();
   const inputRef = useRef<string>();

   const fetchData = async (id: string)=>{
      const rawData = await fetch(`${url}users/content/${id}`);
      const data = await rawData.json();
     setData(data);
   }
console.log(data)

   const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      inputRef.current = e.target.value
   };

   return (
   <Box>
      <Input onChange={inputHandler} label='Podaj swój kod dostępu'/>
      <ActionButton fetch={()=>fetchData(inputRef.current!)} style={styleActionButton} text='Zaloguj się'/>
   </Box>
   )
   }


   export default LoginBox