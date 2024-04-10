export { initalRender, renderGallery };

const initalRender = () => {
  const form = document.createElement('form');
  form.classList.add('search-form');
  const input = document.createElement('input');
  input.type = 'text';
  input.classList.add('search-input');
  input.placeholder = 'Search images...';
  const button = document.createElement('button');
  button.type = 'submit';
  button.classList.add('search-button');
  button.textContent = 'Search';
  const list = document.createElement('ul');
  list.classList.add('gallery-list');
  form.append(input, button);
  document.body.append(form, list);
};

const renderGallery = imagesGallery => {
  const result = imagesGallery.map(img => {
    const item = document.createElement('li');
    item.classList.add('gallery-item');

    // console.log(item);

    const link = document.createElement('a');
    link.classList.add('gallery-link');
    link.href = img.largeImageURL;

    // console.log(link);

    const image = document.createElement('img');
    image.classList.add('gallery-image');
    image.src = img.webformatURL;
    image.alt = img.tags;
    image.width = '360';

    // console.log(image);

    const descItems = {
      Likes: img.likes,
      Views: img.views,
      Comments: img.comments,
      Downloads: img.downloads,
    };

    // console.log(descItems);

    const descList = document.createElement('ul');
    descList.classList.add('gallery-desc-list');
    for (let item in descItems) {
      const descItem = document.createElement('li');
      descItem.classList.add('gallery-desc-item');
      //   console.log(descItem);
      const descTtl = document.createElement('p');
      descTtl.classList.add('gallery-desc-ttl');
      descTtl.textContent = item;
      //   console.log(descTtl);
      const descText = document.createElement('p');
      descText.classList.add('gallery-desc-text');
      descText.textContent = descItems[item];
      //   console.log(descText);
      descItem.append(descTtl, descText);
      descList.append(descItem);
    }

    // console.log(descList);

    link.append(image);
    item.append(link, descList);
    return item;
  });
  return result;
};
