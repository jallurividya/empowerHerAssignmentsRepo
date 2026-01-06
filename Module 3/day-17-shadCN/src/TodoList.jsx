import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'
import { Checkbox } from './components/ui/checkbox'

const TodoList = () => {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])

    const addTodo = ()=>{
        if(!todo) return
        setTodos([...todos,{ text:todo, done:false }])
        setTodo("")
    }

  return (
    <Card className="max-w-md mx-auto">
        <CardHeader>
            <CardTitle>Todo List</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
            <div className='flex gap-2'>
                <Input placeholder="Add Todo" value={todo} onChange={(e)=>setTodo(e.target.value)} />
                <Button onClick={addTodo}>Add</Button>
            </div>
            {todos.map((t,i)=>(
                <div key={i} className='flex items-center gap-2'>
                    <Checkbox checked={t.done} onCheckedChange={()=>{
                        const copy = [...todos]
                        copy[i].done = !copy[i].done
                        setTodos(copy)
                    }}
                    />
                    <span className={t.done ? "line-through text-gray-400" : ""}>
                        {t.text}
                    </span>
                </div>
            ))}
        </CardContent>
    </Card>
  )
}

export default TodoList