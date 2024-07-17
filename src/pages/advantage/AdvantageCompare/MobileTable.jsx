import { useEffect, useState } from "preact/hooks";
import Correct from "./Correct";
import False from "./False";

const MobileTable = (props) => {
  const { dataSource, title, version } = props;

  return (
    <div class="overflow-x-auto rounded-2xl mb-6">
      <table class="table bg-secondary rounded-2xl table-fixed">
        <tbody>
          {
            dataSource.map((item, index) => {
              return (
                <>
                  {index === 0 && <tr>
                    <td class="text-xl align-top text-left" colspan={2}>
                      {title}
                    </td>
                  </tr>}
                  <tr>
                    <td class="text-base font-normal text-neutral border-l-0 border-dotted border-r border-link border-t">
                      {item.name.title && <p>{item.name.title}</p>}
                      {item.name.des && <p class="text-xs">{item.name.des}</p>}
                    </td>
                    <td class="text-center border-dotted border-r-0 border-link border-t">
                      {typeof item[version]?.checked === 'boolean' && <p>
                        {item[version]?.checked ? <Correct /> : <False />}
                      </p>}
                      {item[version]?.des && (
                        <p class="text-xs font-normal text-warning">
                          {item[version]?.des}
                        </p>
                      )}
                    </td>
                  </tr>
                </>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default MobileTable;