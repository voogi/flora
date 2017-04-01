import {Pipe} from "@angular/core";

// # Filter Array of Objects
@Pipe({ name: 'filter' })
export class FilterPipe {
  transform(items, key, value) {
    if (!key) {
      return items;
    } else if (items) {
      return items.filter(item => {
          if ((typeof item[key] === 'string' || item[key] instanceof String) &&
            (item[key].toLowerCase().indexOf(value.toLowerCase()) !== -1)) {
            return true;
          }
      });
    }
  }
}
