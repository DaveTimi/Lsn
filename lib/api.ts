import { NextResponse } from 'next/server'; import { requireUser } from './auth';
export async function guard(){try{return await requireUser()}catch{return null}}
export const json=(data:any,status=200)=>NextResponse.json(data,{status});
