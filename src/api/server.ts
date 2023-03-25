const token = "1805b3d8a77ae2adef5c33aa85264c669f301e1dd73f1407"
export const server_calls = {
    get: async () => {
        const response = await fetch(`https://outgoing-shine-rhinoceros.glitch.me/api/cars`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Acess-Control-Allow-Origin': '*'
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://outgoing-shine-rhinoceros.glitch.me/api/cars`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Acess-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://outgoing-shine-rhinoceros.glitch.me/api/cars/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Acess-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('failed to update data on server')
        }
    },
    delete: async(id:string) => {
        const response = await fetch(`https://outgoing-shine-rhinoceros.glitch.me/api/cars/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Acess-Control-Allow-Origin': '*'
            }
        })
        if (!response.ok){
            throw new Error('failed to update on server')
        }
        return;
    }
    
}