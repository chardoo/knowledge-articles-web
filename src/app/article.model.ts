export class Article {
    _id: string;
    articleId:string;
    intentId: string;
    summary: string;
    description: String;
    createdAt:string;
    updatedAt: string;

    constructor(id:string, articleid:string,intentid:string, summary:string,detail:string, createdAt:string, updatedAt:string){
      this._id = id;
      this.articleId = articleid;
      this.intentId = intentid;
      this.summary = summary;
      this.description = detail;
      this.createdAt  = createdAt;
      this.updatedAt = updatedAt;



    }
  }

 