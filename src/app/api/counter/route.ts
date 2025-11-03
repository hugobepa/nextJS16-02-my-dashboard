//https://nextjs.org/docs/app/api-reference/file-conventions/route

import { NextResponse } from "next/server";

export async function GET(request: Request){

    //console.log({method: request.method})

    return NextResponse.json({
         method: 'GET',
        count: 100})

}

export async function POST(request: Request){

    //console.log({method: request.method})

    return NextResponse.json({
        method: 'POST',
        count: 100})

}