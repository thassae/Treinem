import { AreaEnum } from '../enums/area-enum';
import { Option } from './option';

export interface Question {
    type: AreaEnum;
    language: string;
    content: string;
    options: Option[];
    keywords: string[];
    isAnswered: boolean;
}