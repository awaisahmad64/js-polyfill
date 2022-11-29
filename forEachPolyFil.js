console.log('Polyfil of forEach?');
      // create an array containing random sample of ages
      const ages = [23, 34, 45, 56, 16, 37, 41, 45, 67, 81];
    // here we defined our myForEach function
      Array.prototype.myForEach = function (callback) {
        // Logic of for loop
        for (let i = 0; i < this.length; i++) {
          callback(this[i], i, this);
        }
      };
      // here we using our myForEach function
      ages.myForEach((age,ageIndex,agesList) => console.log(ageIndex,age,agesList));