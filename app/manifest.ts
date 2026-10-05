import type { MetadataRoute } from 'next';
export default function manifest(): MetadataRoute.Manifest { return { name:'Levity Ethics Systems', short_name:'LES', description:'School Operating System', start_url:'/dashboard', display:'standalone', background_color:'#f8fafc', theme_color:'#155eef', icons:[] }; }
