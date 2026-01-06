import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import { Button } from './components/ui/button'

const Slideshow = () => {
    const images = [
        "https://tse1.mm.bing.net/th/id/OIP.GpfWQnqdLuXiMbr2xfwpdQHaEK?pid=Api&P=0&h=180",
        "https://tse1.mm.bing.net/th/id/OIP.sXzw81fnlMlNIxozIWC8WgHaEK?pid=Api&P=0&h=180",
        "https://tse4.mm.bing.net/th/id/OIP.e1Ag3XBEWXYXG_QQsUnvOQHaEK?pid=Api&P=0&h=180"
    ]

    const [index, setIndex] = useState(0)

    const nextImage = ()=>{
        setIndex((index+1)%images.length)
    }

    const prevImage = ()=>{
        setIndex((index-1 + images.length)%images.length)
    }
  return (
    <div className='flex p-6 justify-center'>
        <Card className="max-w-sm">
            <CardHeader>
                <CardTitle>Image Slideshow</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
                <img src={images[index]} alt='slide' className='mx-auto rounded-md' />
                <Tabs value={String(index)}>
                    <TabsList className='flex justify-center rounded-lg'>
                        {images.map((_, i)=>(
                            <TabsTrigger key={i} value={String(i)} onClick={()=>setIndex(i)} className='data-[state=active]:bg-gray-300 rounded-md' >
                                {i+1}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>
                <div className='flex justify-between'>
                    <Button onClick={prevImage}>Previous</Button>
                    <Button onClick={nextImage}>Next</Button>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default Slideshow