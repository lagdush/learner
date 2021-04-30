import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getDataFromApi } from '../../../store/actionsToApi';
import ActionButton from '../../Atoms/Button/Button';
import Input from '../../Atoms/Input';
import { Box, styleActionButton} from './LoginBox-style'


type ContentBoxProps = {

}

const LoginBox: React.FC<ContentBoxProps> = () => {
   const dispatch = useDispatch();

   const inputRef = useRef<string>();

   const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      inputRef.current = e.target.value
   };

   return (
   <Box>
      <Input onChange={inputHandler} label='Podaj swój kod dostępu'/>
      <ActionButton fetch={()=>dispatch(getDataFromApi(inputRef.current))} style={styleActionButton} text='Zaloguj się'/>
   </Box>
   )
   }


   export default LoginBox