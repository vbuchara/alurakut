import { SiteClient } from 'datocms-client';

export default async function requestsReceiver(request, response){
  if(request.method === 'GET'){
    // Environment Variable named 'DATO_TOKEN' for the DatoCMS Token
    const client = new SiteClient(process.env.DATO_TOKEN);

    const records = await client.items.all({
      filter: {
        type: '968538',
      }
    });

    response.json(records);

    return;
  }

  if(request.method === 'POST'){
    // Environment Variable named 'DATO_TOKEN' for the DatoCMS Token
    const client = new SiteClient(process.env.DATO_TOKEN);

    const record = await client.items.create({
      itemType: '968538',
      title: request.body.name,
      communityid: request.body.id,
      imageurl: request.body.urlImage,
      communitylink: request.body.link,
      creatorslug: request.body.creator,
      createdat: request.body.createdAt,
      local: request.body.local,
      category: request.body.category,
      language: request.body.language,
    });

    response.json(record);

    return;
  }

  response.status(404).json(
    { 
      message: 'Not Found'
    }
  );
}