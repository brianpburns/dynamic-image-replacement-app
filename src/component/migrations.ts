// Migrations are meant to migrate the existing data from the previous version of your component to the new one in case changes to the schema are causing breaking changes. Without this, pages that had installed your app previously would crash once it gets updated.
export const v1: any = {
  from: 0,
  to: 1,
  run: (entity: any) => {
    entity.data.styles = { textAlign: "left" };
    return entity;
  },
};

export const migrations: any[] = [v1];
