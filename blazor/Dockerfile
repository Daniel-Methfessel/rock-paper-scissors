# https://codepruner.com/post/2023/2023-09-02-how-to-run-blazor-wasm-app-in-container/
FROM nginx AS base
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["blazor.csproj", "./"]
RUN dotnet restore "blazor.csproj"

COPY . .
WORKDIR "/src"
RUN dotnet build "blazor.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "blazor.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /usr/share/nginx/html
COPY --from=publish /app/publish/wwwroot .
COPY  ./nginx.conf /etc/nginx/nginx.conf

