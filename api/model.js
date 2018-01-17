
class model {
  constructor() {
    this.indexJob=0;
    this.jobs = [];
    this.model = {};
  }
  start(){
    this.jobs[this.indexJob]&&this.jobs[this.indexJob].call(this);
  }
  next(){
    this.indexJob++;
    if (this.indexJob == this.jobs.length) {
      this.done&&this.done();
    }
    this.jobs[this.indexJob]&&this.jobs[this.indexJob].call(this);
  }
  done(){
  }
}
export default model;
