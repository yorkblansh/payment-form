import './list.item.wrapper.style.scss';

export interface IListItem {
   (props: { index: string | number; value: string; Label: string; link?: boolean }): JSX.Element;
}

export const ListItem: IListItem = ({ index, value, Label, link }) => {
   return (
      <div className="list-item--wrapper">
         <div className="list-item--wrapper--label" id={`item_label_${index}`}>
            {Label}
         </div>
         <div
            onClick={(e) => link && (document.location.href = value)}
            className={`list-item--wrapper--body ${link && 'list-item--wrapper--body--link'}`}
            key={`item_name_${index}`}
            id={`item_${index}`}
            children={value}
         />
      </div>
   );
};
