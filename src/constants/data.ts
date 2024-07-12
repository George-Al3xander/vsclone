import React from 'react';

import { Github } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import ExportMenu from '@/components/file/export-menu';
import ImportMenu from '@/components/file/import-menu';
import { TOutputPosition } from '@/types/types';

export const metadata: Metadata = {
    title: 'VSClone',
    description: 'Effortless web-based code compiler',
};

const githubHref = 'https://github.com/George-Al3xander';

export const fileManagerDialogs = {
    import: React.createElement(ImportMenu),
    export: React.createElement(ExportMenu),
};

const optionsIconProps = {
    className: 'mr-2 h-4 w-4',
};

export const githubOption = (className?: string) =>
    React.createElement(
        Link,
        { href: githubHref, target: '_blank', className },
        React.createElement(Github, optionsIconProps),
        React.createElement('span', null, 'Github'),
    );

export const outputPositionVariants: TOutputPosition[] = [
    'top',
    'bottom',
    'right',
    'left',
];

export const sampleCode = {
    javascript: `
// JavaScript Example
console.log("Hello, World!");
`,
    typescript: `
// TypeScript Example
const msg: string = "Hello, World!";
console.log(msg);
`,
    python: `
# Python Example
print("Hello, World!")
`,
    java: `
// Java Example
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
`,
    csharp: `
// C# Example
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}
`,
    php: `
// PHP Example
<?php
echo "Hello, World!";
?>
`,
    cpp: `
// C++ Example
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
`,
};

export const titles = {
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    python: 'Python',
    java: 'Java',
    csharp: 'C#',
    php: 'PHP',
    cpp: 'C++',
};

export const fileExtensionDialog = {
    title: 'Alert: Different File Extension Detected',
    description: `You've imported a file with a different language extension. The imported code is already saved. \n Do you want to stay on the current page or switch to the actual language?`,
    btn_cancel: 'Stay Here',
    btn_accept: 'Switch Language',
};
