//PROMESAS
search() {
        let promise = new Promise((resolve, reject) => {
          let apiURL = "https://jsonplaceholder.typicode.com/posts/1";
          this.http.get(apiURL)
            .toPromise()
            .then(
              res => { // Success
                resolve(res.json());
              }
            );
        });
        return promise;
      }

      
        subject
        var subject = new Subject();

        subject.subscribe({
        next: (v) => console.log('observerA: ' + v)
        });
        subject.subscribe({
        next: (v) => console.log('observerB: ' + v)
        });

        subject.next(1);
        subject.next(2);

        //streams
        let first = Observable.timer(10,500).map(r => {
            return {source:1,value:r};
          }).take(4);
          let second = Observable.timer(10,500).map(r => {
            return {source:2,value:r};
          }).take(4);
          first.concat(second).subscribe(res => console.log(res));*/

        scheduler
        const asyncScheduler = Observable.of('')
  .startWith('async', Scheduler.async);

    const asapScheduler = Observable.of('')
    .startWith('asap', Scheduler.asap);

    const queueScheduler = Observable.of('')
    .startWith('queue', Scheduler.queue);


    Observable.merge(
        asyncScheduler,
        asapScheduler,
        queueScheduler)
    .filter(x => !!x)
    .subscribe(console.log);

    console.log('after subscription')

        operadores
        const data = [0,1,2,3];

        const result = data
        .filter(x => {
        console.log(`filter: ${x}`);
        return x % 2 === 0;
        })
        .map(x => {
        console.log(`map: ${x}`);
        return x * x;
        }) 