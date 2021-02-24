

function download (url , downloaded ) {
    console.log(`downloading from ${url}`)
    if(!url.startsWith('http')){

      return  downloaded(new Error('url must be strated with http'))

    }

    setTimeout(()=>{
        let savedFile = url.split('/').pop()
        console.log(`downloaded and saved as ${savedFile}`)
        downloaded(null , savedFile)
    
    },3000)

    

}

function compress(file , format , compressed){
    console.log(`compressing ${file}`)
    if(['zip','gzip','7z'].indexOf(format) ===-1){
     return  compressed(new Error('we only support zip , gzip and 7z'))
    }
    setTimeout(()=>{
        let archive = file.split('.')[0] + '.'+format
        console.log(`compressed and saved as ${archive}`)
        compressed(null , archive)
    },2000)
}

function upload(server , file , uploaded){
    console.log(`uploading ${file} to ${server}`)
    if(!server.startsWith('ftp://')){
       return  uploaded(new Error('we can only update to ftp server'))
    }

    setTimeout(()=>{
        let remotePath = `${server}/${file}`
        console.log(`uploaded to ${remotePath}`)
        //if(typeof uploaded === 'function')
        uploaded(remotePath)
    },1000)


}

download('http://somesite.com/path/impage.jpg', (err, file) => {
 if (err) thorw (err)

    compress(file, 'zip' , (err , archive) => {
        if (err){
            console.warn(err)
        } 
        archive = file
           
        upload('ftp://file.com',archive,(err)=>{
            if (err) thorw (err)

        })
    
    })
})