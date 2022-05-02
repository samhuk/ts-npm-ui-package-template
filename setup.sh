COMPONENT_NAME_PASCAL_CASE=DataTable
COMPONENT_NAME_DASH_CASE=data-table
NPM_PACKAGE_NAME=data-table

sed -i "s/MyComponent/$COMPONENT_NAME_PASCAL_CASE/g" src/component/index.ts

sed -i "s/MyComponent/$COMPONENT_NAME_PASCAL_CASE/g" src/client/components/home.tsx

sed -i "s/MyComponent/$COMPONENT_NAME_PASCAL_CASE/g" src/client/components/body.tsx
sed -i "s/my-component/$COMPONENT_NAME_DASH_CASE/g" src/client/components/body.tsx

sed -i "s/MyComponent/$COMPONENT_NAME_PASCAL_CASE/g" src/client/components/showcase/myComponent.tsx

sed -i "s/MyComponent/$COMPONENT_NAME_PASCAL_CASE/g" src/client/components/showcase/index.tsx
sed -i "s/my-component/$COMPONENT_NAME_DASH_CASE/g" src/client/components/showcase/index.tsx

sed -i "s/MyComponent/$COMPONENT_NAME_PASCAL_CASE/g" src/client/components/common/generic/myComponent.tsx

sed -i "s/MyComponent/$COMPONENT_NAME_PASCAL_CASE/g" src/client/components/header/index.tsx

sed -i "s/my-component/$NPM_PACKAGE_NAME/g" package.json
