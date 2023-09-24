import React from "react";
import {
  TbBrandTypescript,
  TbBrandBootstrap,
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandGithub,
  TbBrandVisualStudio,
  TbBrandReactNative,
  TbBrandPython,
  TbBrandNodejs,
  TbBrandMongodb,
  TbBrandJavascript,
  TbBrandMysql,
  TbBrandTailwind,
  TbBrandVite,
} from "react-icons/tb";

interface IconProps {
  color: string;
  size: string;
}

export const IconSpan = ({ size, color }: IconProps) => (
  <>
    <TbBrandJavascript size={size} color={color} />
    <TbBrandTypescript size={size} color={color} />
    <TbBrandNodejs size={size} color={color} />
    <TbBrandCss3 size={size} color={color} />
    <TbBrandHtml5 size={size} color={color} />
    <TbBrandBootstrap size={size} color={color} />
    <TbBrandTailwind size={size} color={color} />
    <TbBrandReactNative size={size} color={color} />
    <TbBrandVite size={size} color={color} />
    <TbBrandMongodb size={size} color={color} />
    <TbBrandMysql size={size} color={color} />
    <TbBrandPython size={size} color={color} />
    <TbBrandVisualStudio size={size} color={color} />
    <TbBrandGithub size={size} color={color} />
  </>
);
