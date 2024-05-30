function volumeTabung(r,t){
    if(typeof r === 'number' && typeof t === 'number'){
        const hasil = Math.PI * r * r * t
        return hasil   
    }else if( r === undefined ||  r === null ||  t === undefined ||  t === null){
        return 'parameter harus diisi'
    }else{
        return 'parameter harus angka'
    }

   
    

}

export default volumeTabung