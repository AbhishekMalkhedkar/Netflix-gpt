import OpenAI from 'openai';
import { OPENAI_KEY } from './constatnts';

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',  
  apiKey: OPENAI_KEY ,// This is the default and can be omitted
  dangerouslyAllowBrowser: true
});

export default  openai;