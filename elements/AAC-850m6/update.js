function(instance, properties, context) {
    
    const tg = new tourguide.TourGuideClient();
    
    properties.data.split(/\r?\n/).map(e => {
        [target, content, title = "", order = null] = e.split('|');
        if(target && content){
            tg.addSteps([{content, title, target, order }])
        }
    });
    
    tg.start();
    
}