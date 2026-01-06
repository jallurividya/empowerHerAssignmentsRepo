import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Button } from './components/ui/button'

const FeedbackForm = () => {
    const [form, setForm] = useState({
        name:"",
        email:"",
        feedback:""
    })
    const [submit, setSubmit] = useState(null)

    const handleSubmit = ()=>{
        setSubmit(form)
        setForm({name:"",email:"",feedback:""})
    }

  return (
    <Card className="max-w-md mx-auto mb-8">
        <CardHeader>
            <CardTitle>Feedback Form</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
            <Input placeholder="Name" value={form.name} onChange={(e) => setForm({...form, name:e.target.value})} />
            <Input placeholder="Email" value={form.email} onChange={(e) => setForm({...form, email:e.target.value})} />
            <Textarea placeholder="Feedback" value={form.feedback} onChange={(e)=>setForm({...form, feedback:e.target.value})} />
            <Button onClick={handleSubmit}>Submit</Button>
            { submit && (
                <div className='mt-4 text-sm'>
                    <p><b>Name: </b>{submit.name}</p>
                    <p><b>Email: </b>{submit.email}</p>
                    <p><b>Feedback: </b>{submit.feedback}</p>
                </div>
            )} 
        </CardContent>
    </Card>
  )
}

export default FeedbackForm