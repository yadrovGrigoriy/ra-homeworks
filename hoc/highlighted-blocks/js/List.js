'use strict';

const VideoWithTypeItem = TypeItem(Video);
const ArticleWithTypeItem = TypeItem(Article);

const List = props => {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <VideoWithTypeItem {...item} />
                );

            case 'article':
                return (
                    <ArticleWithTypeItem {...item} />
                );
        }
    });
};
