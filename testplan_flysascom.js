<script>
fetch('https://www.flysas.com/en/')                
.then(res => {
	if(res.ok){
	console.log("Connection OK");
	}else{
	console.log("There is an issue connecting to the server");
	}   
})				
.catch(error => {
throw(error);
})
try {
        if (to=""){
		 console.log("Destination not specified");
		 }else{
		 console.log("Destination OK");
		 }  
    } catch (error) {
        console.log(error);
    }
</script>				
				
