import { FaJava, FaJs, FaPhp, FaPython } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { TbBrandCpp, TbBrandCSharp } from 'react-icons/tb';

export const LANGUAGES = [
    'javascript',
    'typescript',
    'python',
    'java',
    'csharp',
    'php',
    'cpp',
] as const;

export const BASE_URL = 'https://emkc.org/api/v2/piston';

export const BACKUP_LANGUAGE_VERSIONS = {
    javascript: '18.15.0',
    typescript: '5.0.3',
    python: '3.10.0',
    java: '15.0.2',
    csharp: '6.12.0',
    php: '8.2.3',
    cpp: '10.2.0',
};

export const LANGUAGE_FILE_EXTENSIONS = {
    javascript: '.js',
    typescript: '.ts',
    python: '.py',
    java: '.java',
    csharp: '.cs',
    php: '.php',
    cpp: '.cpp',
};

export const LANGUAGES_REACT_ICONS = {
    javascript: FaJs,
    typescript: SiTypescript,
    python: FaPython,
    java: FaJava,
    csharp: TbBrandCSharp,
    php: FaPhp,
    cpp: TbBrandCpp,
};
