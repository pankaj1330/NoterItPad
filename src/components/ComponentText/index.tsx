import { Typography } from "@mui/material"

interface ComponentText {
    text : string;
    align ?: "right" | "left" | "center" | "justify" | "inherit";
    className ?: string;
    fontWeight ?: string | number;
    variant ?: 'h1' |'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';
    color ?: string;
}

function Text({text,align, className,fontWeight,variant,color} : ComponentText) {
  return (
    <Typography color={color} variant={variant} align={align} className={className} fontWeight={fontWeight}>{text}</Typography>
  )
}

export default Text