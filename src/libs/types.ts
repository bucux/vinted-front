
//////////////////////////////////////////////////////niveau 0

export type Toffers = {
  count: number,
  offers: Toffer[]
}

//////////////////////////////////////////////////////niveau1

export type Toffer = {
  _id: string, 
  product_name: string,
  product_description: string,
  product_price:number,
  product_details: Tproduct_detail[],
  product_pictures: Timage[],
  owner: Towner,
  product_image: Timage,
  product_date: string,
  __v: number
}

//////////////////////////////////////////////////////niveau2

export type Tproduct_detail = {
  [key: string]: string;
};

export type Towner = {
  account: Taccount,
  _id: string
}

//////////////////////////////////////////////////////// niveau 3

export type Taccount = {
  username: string,
  avatar: Timage,
}

///////////////////////////////////////////////////////// HORS NIVEAU

export type Timage = {
  "asset_id": string,
  "public_id": string,
  "version": number,
  "version_id": string,
  "signature": string,
  "width": number,
  "height": number,
  "format": string,
  "resource_type": string,
  "created_at": string,
  "tags": string[],
  "bytes": number,
  "type": string,
  "etag": string,
  "placeholder": boolean,
  "url": string,
  "secure_url": string,
  "folder": string,
  "access_mode": string,
  "original_filename": string,
  "api_key": string,
}