import { cookies } from 'next/headers'; import { SignJWT,jwtVerify } from 'jose'; import bcrypt from 'bcryptjs'; import { db } from './db';
const secret=new TextEncoder().encode(process.env.AUTH_SECRET||'dev-only-change-me');
export async function signIn(email:string,password:string){const u=await db.user.findUnique({where:{email}}); if(!u||!(await bcrypt.compare(password,u.passwordHash))) return null; const token=await new SignJWT({sub:u.id,role:u.role,schoolId:u.schoolId,name:u.name}).setProtectedHeader({alg:'HS256'}).setExpirationTime('7d').sign(secret); (await cookies()).set('les_session',token,{httpOnly:true,sameSite:'lax',secure:process.env.NODE_ENV==='production',path:'/',maxAge:604800}); await db.user.update({where:{id:u.id},data:{lastLoginAt:new Date()}}); return u;}
export async function session(){const token=(await cookies()).get('les_session')?.value;if(!token)return null;try{return (await jwtVerify(token,secret)).payload as any}catch{return null}}
export async function signOut(){(await cookies()).delete('les_session')}
export async function requireUser(){const s=await session(); if(!s) throw new Error('UNAUTHENTICATED'); return s}
